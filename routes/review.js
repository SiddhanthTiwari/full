const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing= require("../models/listing.js");
const {reviewListing,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const Review = require("../models/review.js");

const reviewController=require("../controllers/review.js");


//Reviews--Post Review Route
router.post("/",isLoggedIn,reviewListing,wrapAsync(reviewController.createReview));


router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;