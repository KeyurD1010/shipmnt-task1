import XLSX from "xlsx";

import Author from "../models/Author.model.js";
import Book from "../models/Book.model.js";
import { validateEmailFormat } from "../utils/mailValidation.js";

export const uploadExcel = async (req, res) => {
  try {
    if (!req.files || !req.files.excelFile) {
      return res.status(400).send("No file was uploaded.");
    }

    const file = req.files.excelFile;
    const workbook = XLSX.read(file.data, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    const requiredColumns = [
      "Book Name",
      "ISBN Code",
      "Author Name",
      "Author Email",
      "Date of Birth",
    ];

    const headers = data[0];
    const missingColumns = requiredColumns.filter(
      (column) => !headers.includes(column)
    );
    if (missingColumns.length > 0) {
      return res
        .status(400)
        .send(`Missing required columns: ${missingColumns.join(", ")}`);
    }

    data.shift();
    const rows = XLSX.utils.sheet_to_json(worksheet);

    for (let row of rows) {
      let validationResponse = validateEmailFormat(row["Author Email"]);
      if (!validationResponse.valid) {
        return res.status(400).send({ message: validationResponse.message });
      }

      if (row["Date of Birth"]) {
        if (!isNaN(Date.parse(row["Date of Birth"]))) {
          row["Date of Birth"] = new Date(row["Date of Birth"])
            .toISOString()
            .split("T")[0];
        } else {
          return res.status(400).send({
            message: `Validation error: Invalid date format in 'Date of Birth' for author '${row["Author Name"]}'.`,
          });
        }
      }
    }

    return res.status(200).json(rows);
  } catch (error) {
    res.status(500).send(`Server error: ${error.message}`);
  }
};

export const saveExcel = async (req, res) => {
  try {
    const bookData = req.body;

    for (const item of bookData) {
      let author = await Author.findOne({ email: item["Author Email"] });

      if (!author) {
        author = new Author({
          name: item["Author Name"],
          email: item["Author Email"],
          dateOfBirth: item["Date of Birth"],
        });

        await author.save();
      }

      let book = await Book.findOne({ isbnCode: item["ISBN Code"] });

      if (book) {
        book.name = item["Book Name"];
        book.authorId = author._id;
        await book.save();
      } else {
        book = new Book({
          name: item["Book Name"],
          isbnCode: item["ISBN Code"],
          authorId: author._id,
        });

        await book.save();
      }
    }

    res
      .status(200)
      .send({ message: "Books and Authors saved/updated successfully" });
  } catch (error) {
    res.status(500).send(`Server error: ${error.message}`);
  }
};
