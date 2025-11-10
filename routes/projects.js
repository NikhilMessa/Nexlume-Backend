// routes/projects.js
import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

/** GET /api/projects?limit=&page= */
router.get("/", async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 50, 100);
    const page = Math.max(Number(req.query.page) || 1, 1);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Project.find({}, { _id: 0, __v: 0 })
        .sort({ id: 1 })
        .skip(skip)
        .limit(limit),
      Project.countDocuments()
    ]);

    res.json({
      data: items,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

/** GET /api/projects/:id  (numeric id) */
router.get("/:id", async (req, res) => {
  try {
    const item = await Project.findOne(
      { id: Number(req.params.id) },
      { _id: 0, __v: 0 }
    );
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch project" });
  }
});

/** POST /api/projects  (create) */
router.post("/", async (req, res) => {
  try {
    const body = req.body;

    // basic validation to match your UI fields
    const required = [
      "id",
      "title",
      "subtitle",
      "description",
      "image",
      "gradient",
      "tags"
    ];
    for (const key of required) {
      if (body[key] === undefined || body[key] === null) {
        return res.status(400).json({ error: `Missing field: ${key}` });
      }
    }

    const exists = await Project.findOne({ id: body.id });
    if (exists) return res.status(409).json({ error: "id already exists" });

    const created = await Project.create(body);
    const { _id, __v, ...clean } = created.toObject();
    res.status(201).json(clean);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create project" });
  }
});

/** PATCH /api/projects/:id  (update) */
router.patch("/:id", async (req, res) => {
  try {
    const updated = await Project.findOneAndUpdate(
      { id: Number(req.params.id) },
      { $set: req.body },
      { new: true, projection: { _id: 0, __v: 0 } }
    );
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update project" });
  }
});

/** DELETE /api/projects/:id  (optional) */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Project.findOneAndDelete({ id: Number(req.params.id) });
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete project" });
  }
});

export default router;
