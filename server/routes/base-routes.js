const _ = require("lodash");
const baseRepository = require("../database/base-repository.js");

const baseRoutesCreator = (tableName) => {
  const bRepo = baseRepository(tableName);
  const baseRoutes = {
    getAll: async (req, res) => {
      const allEntries = await bRepo.all();
      return res.send(allEntries);
    },
    getById: async (req, res) => {
      const data = await bRepo.get(req.params.id);
      return res.send(data);
    },
    post: async (req, res) => {
      const created = await bRepo.create(req.body);
      return res.send(created);
    },

    patch: async (req, res) => {
      const patched = await bRepo.update(req.params.id, req.body);
      return res.send(patched);
    },

    deleteAll: async (req, res) => {
      const deletedEntries = await bRepo.clear();
      return res.send(deletedEntries);
    },

    remove: async (req, res) => {
      const deleted = await bRepo.del(req.params.id);
      return res.send(deleted);
    },
  };
  return baseRoutes;
};

module.exports = baseRoutesCreator;
