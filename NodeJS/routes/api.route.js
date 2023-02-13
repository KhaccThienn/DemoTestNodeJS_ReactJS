const uploadFile = require("../config/uploadFile");
const peopleController = require("../controllers/peopleController");

const api_route = (app) => {
    app.get("/api/people", peopleController.getAll);
    app.get("/api/people/:id", peopleController.getByID);

    app.post("/api/people", uploadFile.single("avatar"), peopleController.create);

    app.put("/api/people/:id", uploadFile.single("avatar"), peopleController.update);

    app.delete("/api/people/:id", peopleController.delete);
};

module.exports = api_route;