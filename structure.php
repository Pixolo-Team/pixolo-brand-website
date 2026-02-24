<?php
// Template Pages Structures
$template_structures = (object) [
  // Add keys here to add a Page Template Structure
];
$structure = (object) [
  "case-studies" => array(
      (object) [
        "showInHome" => "",
        "badgeTitle" => "",
        "category" => "",
        "title" => "",
        "slug" => "",
        "description" => "",
        "name" => "",
        "thumbnail" => "",
        "websiteLink" => "",
        "summary" => "",
        "date_published" => "",
        "date_modified" => "",
        
        "clientNumbers" => array(
          (object)[
            "title" => "",
            "numbers" => ""
          ]
        ),
        
        "clientVisionHeading"=>"",
        "clientVisionSectionMainImage" => "",
        "clientVisionSectionImageAlt" => "",
        
        "clientVisions" => array(
          (object)[
            "title" => "",
            "description" => ""
          ]
        ),
        
        "clientSolutions" => array(
          (object)[
            "title" => "",
            "description" => ""
          ]
        ),
        "clientIssuesHeading"=>"",
        "clientIssues" => array(
          (object)[
            "title" => "",
            "description" => "",
            "issue" => "",
            "stat" => ""
          ]
        ),

        
        "aboutPointers" => array(
          (object)[
            "title" => "",
            "description" => ""
          ]
        ),
        "aboutImagesMainImage" => "",
        "aboutImagesOtherImages" => array(
            (object)[
            "imagePath" => "",
            "alt" => ""
          ]),
          
        // toolsUsedDetails object flattened
        "toolItems" => array(
          (object)[
            "logo" => "",
            "title" => "",
            "description" => ""
          ]
        ),
    
        // Arrays stay as-is
        "solutionNumbers" => array(
          (object)[
            "title" => "",
            "description" => "",
            "issue" => "",
            "stat" => ""
          ]
        ),
    
        // keyTakeawaysDetails object flattened
        "learningItems" => array(
          (object)[
            "title" => "",
            "description" => ""
          ]
        ),
        "clientNumbersHeading" => "",
        "galleryImages" => array (
            (object)[
                "imagePath" => "",
                "alt" => ""
            ]    
        ),
        
        // Testimoniols
        "clientImage" => "",
        "clientName" => "",
        "clientRole" => "",
        "clientMessage" => ""
      ]
    ),
    "faq" => array(
        (object)[
            "category" => "",
            "faq_items" => array(
                (object)[
	                "question" => "",
                    "answer" => ""
                ]     
            )
        ]
	),
	"blogs" => array(
	    (object)[
	        "show_in_home" => "",
	        "image" => "",
	        "category" => "",
	        "description" => "",
	        "date_modified" => "",
	        "date" => "",
	        "title" => "",
	        "author" => "",
	        "content" => "",
	        "slug" => ""
	    ]   
	),
	"open_positions" => array(
	    (object)[
	        "category" => "",
	        "title" => "",
	        "apply_url" => "",
	        "experience" => "",
	        "location" => "",
	        "open_spots" => ""
	    ]    
	),
	"portfolio" => array(
	     (object)[
	        "id" => "",
	        "slug" => "",
            "brand_color" => "",
            "brand_name" => "",
            "hero_image" => "",
            "thumbnail_image" => "",
            "logo" => "",
            "title" => "",
            "subtitle" => "",
            "badges" => array(""),
            "show_in_home" => "",
            "is_highlight" => "",
            "website_link" => "",
            "hero" => array(
                (object)[
                    "title" => "",
                    "title_logo" => ""
                ]
            ),
            "video_section" => array(
                (object)[
                    "video_url" => "",
                    "alt" => ""
                ]
            ),
            "introduction" => array(
                (object)[
                    "title" => "",
                    "image" => "",
                    "about_project" => "",
                    "target" => "",
                    "purpose" => ""
                ]
            ),
            "process" => array(
                (object)[
                    "title" => "",
                    "description" => ""
                ]
            ),
            "impact" => array(
                (object)[
                    "number" => "",
                    "title" => ""       
                ]    
            ),
            "teams" => array(
                (object)[
                    "video_url" => "",
                    "alt" => "",
                    "name" => "",
                    "role" => "",
                    "is_highlight" => ""  
                ]    
            ),
            "client_testimonial" => array(
                (object)[
                    "name" => "",
                    "role" => "",
                    "message" => "",
                    "image" => ""
                ]
            ),
            "snapshot" => array(
                (object)[
                    "client" => "",
                    "timeline" => "",
                    "industry" => ""
                ]    
            ),
            "snapshot_services" => array(""),
            "snapshot_platforms" => array(""),
            "snapshot_tech_stack" => array(""),
            "seo" => array(
                (object)[
                    "meta_title" => "",
                    "meta_description" => "",
                    "keywords" => array(""),
                    "og_image" => ""
                ]
            ),
            "seo_keywords" => array("")
        ]
    ),

    "positioning" => array(
        (object)[
            "slug" => "",

            "hero" => (object)[
                "badge_title" => "",
                "title" => "",
                "cta_btn_text" => ""
            ],

            "problems" => (object)[
                "badge_title" => "",
                "title" => "",
                "problemTabs" => array(
                    (object)[
                        "icon" => "",
                        "title" => ""
                    ]
                )
            ],

            "purpose" => (object)[
                "badge_title" => "",
                "title" => "",
                "purpose_cards" => array(
                    (object)[
                        "title" => "",
                        "description" => ""
                    ]
                )
            ],

            "services" => (object)[
                "badge_title" => "",
                "title" => "",
                "service_cards" => array(
                    (object)[
                        "title" => "",
                        "description" => ""
                    ]
                )
            ],

            "process" => (object)[
                "badge_title" => "",
                "title" => "",
                "process_steps" => array(
                    (object)[
                        "title" => "",
                        "description" => ""
                    ]
                )
            ],

            "results" => (object)[
                "badge_title" => "",
                "title" => "",
                "sub_title" => "",
                "result_cards" => array(
                    (object)[
                        "logo" => "",
                        "title" => "",
                        "description" => ""
                    ]
                )
            ],

            "why_pixolo" => (object)[
                "badge_title" => "",
                "title" => "",
                "image" => "",
                "whyus_cards" => array(
                    (object)[
                        "title" => ""
                    ]
                )
            ],

            "ideal_customers" => (object)[
                "badge_title" => "",
                "title" => "",
                "ideal_cards" => array(
                    (object)[
                        "title" => ""
                    ]
                )
            ],

            "cta" => (object)[
                "badge_title" => "",
                "subtitle" => "",
                "title" => "",
                "cta_btn_text" => ""
            ]
        ]
    )

];
