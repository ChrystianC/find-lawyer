import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const cors = require("cors");
const express = require("express");
const app = express();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:Lola5652.@localhost:5432/Lawyler?schema=public",
    },
  },
});

app.use(express.json());

app.use(
  cors({
    origin: "*", // React app origin
    credentials: true,
  })
);

app.listen(3555, () => {
  console.info("Server running at http://localhost:3555");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register/user", async (req, res) => {
  try {
    const { password, userName, email } = req.body;
    const UserPaswwordSechma = z
      .string()
      .min(8, { message: "The password must contain at least 8 characters" })
      .max(32, { message: "The password cannot exceed 32 characters" })
      .regex(/[A-Z]/, {
        message: "The password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "The password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, {
        message: "The password must contain at least one digit",
      })
      .regex(/[\W_]/, {
        message: "The password must contain at least one special character",
      });

    const paresedPassword = UserPaswwordSechma.parse(password);
    if (!paresedPassword) {
      return;
    }
    const user = await prisma.user.create({
      data: { userName: userName, email: email, password: password },
    });
    res.json({ token: user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/register/office", async (req, res) => {
  try {
    const {
      city,
      lawOfficeName,
      email,
      password,
      address,
      officeSpecialization,
    } = req.body;
    const lawoffice = await prisma.lawOffice.create({
      data: {
        lawOfficeName: lawOfficeName,
        email: email,
        city: city,
        password: password,
        address: address,
        officeSpecialization: officeSpecialization,
      },
    });
    res.json({ token: lawoffice });
  } catch (err) {
    res.json({ error: err });
  }
});

app.post("/login/user", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (!user) {
      throw new Error("user not found");
    }
    res.json(user.idUser);
  } catch (err) {
    res.json({ error: err });
  }
});
app.post("/login/office", async (req, res) => {
  try {
    const office = await prisma.lawOffice.findUnique({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (!office) {
      throw new Error("user not found");
    }
    res.json(office.email);
  } catch (err) {
    res.json({ error: err });
  }
});
app.get("/userPreview", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      idUser: req.body.id,
    },
  });
  res.send(user);
});

app.post("/user/preview", async (req, res) => {
  try {
    await prisma.user.update({
      where: {
        idUser: req.body.userId,
      },
      data: {
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
      },
    });
    res.json(req.body.userId);
  } catch (err) {
    res.json({ error: err });
  }
});
