var express = require('express');
var router = express.Router();

var rereddit = require('rereddit');

/* GET home page. */
router.get('/', function(req, res, next) {
	rereddit.read('bloggify').limit(25).end(function(err,posts) {
		rereddit.comments("2os0fe").end(function(err,comments) {
			console.dir(err);
			res.send("<pre>" + JSON.stringify(posts,undefined,2) + "</pre>" +
				"<pre>" + JSON.stringify(comments,undefined,2) + "</pre>" 
				);
		});
	});
});

module.exports = router;

//gets ya:

/*
{
  "kind": "Listing",
  "data": {
    "modhash": "",
    "children": [
      {
        "kind": "t3",
        "data": {
          "domain": "imgur.com",
          "banned_by": null,
          "media_embed": {},
          "subreddit": "bloggify",
          "selftext_html": null,
          "selftext": "",
          "likes": null,
          "user_reports": [],
          "secure_media": null,
          "link_flair_text": null,
          "id": "2zeflp",
          "gilded": 0,
          "archived": false,
          "clicked": false,
          "report_reasons": null,
          "author": "novagenesis",
          "num_comments": 0,
          "score": 1,
          "approved_by": null,
          "over_18": true,
          "hidden": false,
          "thumbnail": "http://b.thumbs.redditmedia.com/zHKMWLdwUqWVzF2IPp72oA8AnjKy5CpNzHjGRn4K5Ro.jpg",
          "subreddit_id": "t5_35bmo",
          "edited": false,
          "link_flair_css_class": null,
          "author_flair_css_class": null,
          "downs": 0,
          "secure_media_embed": {},
          "saved": false,
          "stickied": false,
          "is_self": false,
          "permalink": "/r/bloggify/comments/2zeflp/another_test_please_disregard/",
          "name": "t3_2zeflp",
          "created": 1426658793,
          "url": "http://imgur.com/r/ScumbagSteve/XolZfyK",
          "author_flair_text": null,
          "title": "Another test, please disregard",
          "created_utc": 1426629993,
          "distinguished": null,
          "media": null,
          "mod_reports": [],
          "visited": false,
          "num_reports": null,
          "ups": 1
        }
      },
      {
        "kind": "t3",
        "data": {
          "domain": "self.bloggify",
          "banned_by": null,
          "media_embed": {},
          "subreddit": "bloggify",
          "selftext_html": "<!-- SC_OFF --><div class=\"md\"><p>Hello World</p>\n</div><!-- SC_ON -->",
          "selftext": "Hello World",
          "likes": null,
          "user_reports": [],
          "secure_media": null,
          "link_flair_text": null,
          "id": "2os0fe",
          "gilded": 0,
          "archived": false,
          "clicked": false,
          "report_reasons": null,
          "author": "novagenesis",
          "num_comments": 1,
          "score": 1,
          "approved_by": null,
          "over_18": true,
          "hidden": false,
          "thumbnail": "self",
          "subreddit_id": "t5_35bmo",
          "edited": false,
          "link_flair_css_class": null,
          "author_flair_css_class": null,
          "downs": 0,
          "secure_media_embed": {},
          "saved": false,
          "stickied": false,
          "is_self": true,
          "permalink": "/r/bloggify/comments/2os0fe/test_post_please_ignore/",
          "name": "t3_2os0fe",
          "created": 1418149705,
          "url": "http://www.reddit.com/r/bloggify/comments/2os0fe/test_post_please_ignore/",
          "author_flair_text": null,
          "title": "Test Post, Please Ignore",
          "created_utc": 1418149705,
          "distinguished": null,
          "media": null,
          "mod_reports": [],
          "visited": false,
          "num_reports": null,
          "ups": 1
        }
      }
    ],
    "after": null,
    "before": null
  }
}
[
  {
    "kind": "Listing",
    "data": {
      "modhash": "",
      "children": [
        {
          "kind": "t3",
          "data": {
            "domain": "self.bloggify",
            "banned_by": null,
            "media_embed": {},
            "subreddit": "bloggify",
            "selftext_html": "<!-- SC_OFF --><div class=\"md\"><p>Hello World</p>\n</div><!-- SC_ON -->",
            "selftext": "Hello World",
            "likes": null,
            "user_reports": [],
            "secure_media": null,
            "link_flair_text": null,
            "id": "2os0fe",
            "gilded": 0,
            "archived": false,
            "clicked": false,
            "report_reasons": null,
            "author": "novagenesis",
            "num_comments": 1,
            "score": 1,
            "approved_by": null,
            "over_18": true,
            "hidden": false,
            "thumbnail": "nsfw",
            "subreddit_id": "t5_35bmo",
            "edited": false,
            "link_flair_css_class": null,
            "author_flair_css_class": null,
            "downs": 0,
            "mod_reports": [],
            "secure_media_embed": {},
            "saved": false,
            "is_self": true,
            "name": "t3_2os0fe",
            "permalink": "/r/bloggify/comments/2os0fe/test_post_please_ignore/",
            "stickied": false,
            "created": 1418149705,
            "url": "http://www.reddit.com/r/bloggify/comments/2os0fe/test_post_please_ignore/",
            "author_flair_text": null,
            "title": "Test Post, Please Ignore",
            "created_utc": 1418149705,
            "ups": 1,
            "upvote_ratio": 1,
            "media": null,
            "visited": false,
            "num_reports": null,
            "distinguished": null
          }
        }
      ],
      "after": null,
      "before": null
    }
  },
  {
    "kind": "Listing",
    "data": {
      "modhash": "",
      "children": [
        {
          "kind": "t1",
          "data": {
            "subreddit_id": "t5_35bmo",
            "banned_by": null,
            "link_id": "t3_2os0fe",
            "likes": null,
            "replies": "",
            "user_reports": [],
            "saved": false,
            "id": "cmpxq36",
            "gilded": 0,
            "archived": false,
            "report_reasons": null,
            "author": "novagenesis",
            "parent_id": "t3_2os0fe",
            "score": 1,
            "approved_by": null,
            "controversiality": 0,
            "body": "Test comment, please ignore.",
            "edited": false,
            "author_flair_css_class": null,
            "downs": 0,
            "body_html": "<div class=\"md\"><p>Test comment, please ignore.</p>\n</div>",
            "subreddit": "bloggify",
            "score_hidden": false,
            "name": "t1_cmpxq36",
            "created": 1418149848,
            "author_flair_text": null,
            "created_utc": 1418149848,
            "ups": 1,
            "mod_reports": [],
            "num_reports": null,
            "distinguished": null
          }
        }
      ],
      "after": null,
      "before": null
    }
  }
]
*/
