import * as tuitsDao from "../database/tuits/tuits-dao.js";
const createTuit = async (req, res) => {
  const newTuit = req.body;
  const createdTuit = await tuitsDao.createTuit(newTuit);
  res.json(createdTuit);
};
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const result = await tuitsDao.deleteTuit(tuitdIdToDelete);

  res.json(result);
};

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
};
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
