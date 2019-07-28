// import express from "express";
// import cors from "cors"; may not be needed

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => res.send('yo!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static('public'));

app.locals.lists = [];
app.locals.items = []; 


//Routes

//Get All Lists
app.get("/api/v1/lists", (req, res) => {  
  res.status(200).json(app.locals.lists);
});

//Get Specific List
app.get("/api/v1/lists/:id", (req, res) => {
  const { id } = req.params;
  const list = app.locals.lists.find(list => list.id == id);
  if (!list) return res.status(404).json("List not found");
  return res.status(200).json(list);
});

//Post a Specific List

app.post("/api/v1/lists", (req, res) => {
  const { title } = req.body;
  if (!title)
    return res.status(422).json("Please provide a list title");
  const newList = {
    id: Date.now(),
    //should not use date.now
    ...req.body
  };
  app.locals.lists.push(newList);
  res.status(201).json(newList);
});

//Update Specific List

app.put("/api/v1/lists/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  if (!title)
    return res.status(422).json("Please provide a list title");
  const listIndex = app.locals.lists.findIndex(list => list.id === id);
  if (listIndex === -1) return res.status(404).json("List not found");
  const updatedList = { id, title };
  app.locals.lists.splice(listIndex, 1, updatedList);
  return res.sendStatus(204);
});

//Delete Specific List

app.delete("/api/v1/lists/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const listIndex = app.locals.lists.findIndex(list => list.id === id);
  if (listIndex === -1) return res.status(404).json("List does not exist");
  app.locals.lists.splice(listIndex, 1);
  return res.sendStatus(204);
});

//Get All Items
app.get("/api/v1/items", (req, res) => {  
  res.status(200).json(app.locals.items);
});

//Get Specific Item
app.get("/api/v1/items/:id", (req, res) => {
  const { id } = req.params;
  const item = app.locals.items.find(item => item.id == id);
  if (!item) return res.status(404).json("Item not found");
  return res.status(200).json(item);
});

//Post a Specific Item

app.post("/api/v1/items", (req, res) => {
  const { task  } = req.body;
  if (!task)
    return res.status(422).json("Please provide an item task");
  const newItem = {
    id: Date.now(),
    //should not use date.now
    ...req.body
  };
  app.locals.items.push(newItem);
  res.status(201).json(newItem);
});

//Update Specific Item

app.put("/api/v1/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;
  if (!task)
    return res.status(422).json("Please provide an item task");
  const itemIndex = app.locals.items.findIndex(item => item.id === id);
  if (itemIndex === -1) return res.status(404).json("Item not found");
  const updatedItem = { id, title };
  app.locals.items.splice(itemIndex, 1, updatedItem);
  return res.sendStatus(204);
});

//Delete Specific List

app.delete("/api/v1/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = app.locals.items.findIndex(item => item.id === id);
  if (itemIndex === -1) return res.status(404).json("Item does not exist");
  app.locals.items.splice(itemIndex, 1);
  return res.sendStatus(204);
});

export default server;
