/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateBlog :
 *              type : object
 *              required :
 *                  -   title
 *                  -   text
 *                  -   short_text
 *                  -   images
 *                  -   tags
 *                  -   category
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of blog
 *                  text :
 *                      type : string
 *                      description : the text of blog
 *                  short_text :
 *                      type : string
 *                      description : the short_text of blog
 *                  tags :
 *                      type : array
 *                      description : the list of tags for blog
 *                  images :
 *                      type : array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  category :
 *                      type : string
 *                      description : the id of category for blog
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          UpdateBlog :
 *              type : object
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of blog
 *                  text :
 *                      type : string
 *                      description : the text of blog
 *                  short_text :
 *                      type : string
 *                      description : the short_text of blog
 *                  tags :
 *                      type : array
 *                      description : the list of tags for blog
 *                  images :
 *                      type : array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  category :
 *                      type : string
 *                      description : the id of category for blog
 */

/**
 * @swagger
 *  /admin/blog/add :
 *      post :
 *          tags : [Blog(AdminPanel)]
 *          summary : create blog
 *          requestBody :
 *              required : true
 *              content :
 *                  multipart/form-data :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateBlog'
 *          responses :
 *              201 :
 *                  description : create - blog created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */

/**
 * @swagger
 *  /admin/blog/list :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : get list of blogs
 *          responses :
 *              200 :
 *                  description  : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */

/**
 * @swagger
 *  /admin/blog/get-one/{id} :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : get one blog with id or title
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */
/**
 * @swagger
 *  /admin/blog/search :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : get one blog with search query
 *          parameters :
 *              -   in : query
 *                  name : search
 *                  type : string
 *                  description : search in blog with title text short_text
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */

/**
 * @swagger
 *  /admin/blog/remove/{id} :
 *      delete :
 *          tags : [Blog(AdminPanel)]
 *          summary : delete one blog with id or title
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - blog removed
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/blog/update/{id} :
 *      patch :
 *          tags : [Blog(AdminPanel)]
 *          summary : update blog with id or title
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  multipart/form-data :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateBlog'
 *          responses :
 *              200 :
 *                  description : success - blog updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */

/**
 * @swagger
 *  /admin/blog/bookmark/{blogID} :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : update bookmark blog with id
 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - blog updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/blog/like/{blogID} :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : update like blog with id
 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - blog updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/blog/dislike/{blogID} :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : update dislike blog with id
 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - blog updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
