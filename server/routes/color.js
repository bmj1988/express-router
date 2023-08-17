const express = require("express")
const router = express.Router();

router.get("/", (req,res) =>{
    res.json("GET /colors")
})

router.get("/:name", (res, req)=> {
    res.json("GET /colors/:name")
} )

module.exports = router;
