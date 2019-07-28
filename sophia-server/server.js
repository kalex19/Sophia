// import express from "express";
// import cors from "cors"; may not be needed

const express = require('express')
const cors = require('cors')
const server = express()
const port = 3000

server.use(cors());
server.use(express.json()); 

server.get('/', (req, res) => res.send('yo!'));

server.listen(port, () => console.log(`Example server listening on port ${port}!`));

server.use(express.static('public'));

server.locals.lists = [];
server.locals.items = []; 


//Routes

//Get All Lists
server.get("/api/v1/lists", (req, res) => {  
  res.status(200).json(server.locals.lists);
});

//Get Specific List
server.get("/api/v1/lists/:id", (req, res) => {
  const { id } = req.params;
  const list = server.locals.lists.find(list => list.id == id);
  if (!list) return res.status(404).json("List not found");
  return res.status(200).json(list);
});

//Post a Specific List

server.post("/api/v1/lists", (req, res) => {
  const { title } = req.body;
  if (!title)
    return res.status(422).json("Please provide a list title");
  const newList = {
    id: Date.now(),
    //should not use date.now
    ...req.body
  };
  server.locals.lists.push(newList);
  res.status(201).json(newList);
});

//Update Specific List

server.put("/api/v1/lists/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  if (!title)
    return res.status(422).json("Please provide a list title");
  const listIndex = server.locals.lists.findIndex(list => list.id === id);
  if (listIndex === -1) return res.status(404).json("List not found");
  const updatedList = { id, title };
  server.locals.lists.splice(listIndex, 1, updatedList);
  return res.sendStatus(204);
});

//Delete Specific List

server.delete("/api/v1/lists/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const listIndex = server.locals.lists.findIndex(list => list.id === id);
  if (listIndex === -1) return res.status(404).json("List does not exist");
  server.locals.lists.splice(listIndex, 1);
  return res.sendStatus(204);
});

//Get All Items
server.get("/api/v1/items", (req, res) => {  
  res.status(200).json(server.locals.items);
});

//Get Specific Item
server.get("/api/v1/items/:id", (req, res) => {
  const { id } = req.params;
  const item = server.locals.items.find(item => item.id == id);
  if (!item) return res.status(404).json("Item not found");
  return res.status(200).json(item);
});

//Post a Specific Item

server.post("/api/v1/items", (req, res) => {
  const { task  } = req.body;
  if (!task)
    return res.status(422).json("Please provide an item task");
  const newItem = {
    id: Date.now(),
    //should not use date.now
    ...req.body
  };
  server.locals.items.push(newItem);
  res.status(201).json(newItem);
});

//Update Specific Item

server.put("/api/v1/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;
  if (!task)
    return res.status(422).json("Please provide an item task");
  const itemIndex = server.locals.items.findIndex(item => item.id === id);
  if (itemIndex === -1) return res.status(404).json("Item not found");
  const updatedItem = { id, title };
  server.locals.items.splice(itemIndex, 1, updatedItem);
  return res.sendStatus(204);
});

//Delete Specific List

server.delete("/api/v1/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = server.locals.items.findIndex(item => item.id === id);
  if (itemIndex === -1) return res.status(404).json("Item does not exist");
  server.locals.items.splice(itemIndex, 1);
  return res.sendStatus(204);
});

export default server;
