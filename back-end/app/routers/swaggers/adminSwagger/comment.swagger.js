/**
 * @swagger
 *  components :
 *      schemas :
 *          UpdateComment:
 *              type : object
 *              required :
 *                  -   comment
 *              properties :
 *                  comment :
 *                      type : string
 *                      description : comment for blog or product
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          AddCommentForBlog:
 *              type : object
 *              required :
 *                  -   comment
 *                  -   score
 *                  -   blogName
 *              properties :
 *                  comment :
 *                      type : string
 *                      description : comment for blog
 *                  score :
 *                      type : number
 *                      description : comment score between 1 and 5
 *                  blogName :
 *                      type : string
 *                      description : name of blog
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          AddCommentForCourse:
 *              type : object
 *              required :
 *                  -   comment
 *                  -   score
 *                  -   courseName
 *              properties :
 *                  comment :
 *                      type : string
 *                      description : comment for course
 *                  score :
 *                      type : number
 *                      description : comment score between 1 and 5
 *                  courseName :
 *                      type : string
 *                      description : name of blog
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          AddCommentForProduct:
 *              type : object
 *              required :
 *                  -   comment
 *                  -   score
 *                  -   productName
 *              properties :
 *                  comment :
 *                      type : string
 *                      description : comment for product
 *                  score :
 *                      type : number
 *                      description : comment score between 1 and 5
 *                  productName :
 *                      type : string
 *                      description : name of blog
 */

/**
 * @swagger
 *  /admin/comment/add-comment-blog :
 *      post :
 *          tags : [Comment]
 *          summary : create comment for blog
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/AddCommentForBlog'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/AddCommentForBlog'
 *          responses :
 *              201 :
 *                  description : created
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : "#/definitions/Comment"
 */

/**
 * @swagger
 *  /admin/comment/add-comment-course :
 *      post :
 *          tags : [Comment]
 *          summary : create comment for course
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/AddCommentForCourse'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/AddCommentForCourse'
 *          responses :
 *              201 :
 *                  description : created
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : "#/definitions/Comment"
 */

/**
 * @swagger
 *  /admin/comment/add-comment-product :
 *      post :
 *          tags : [Comment]
 *          summary : create comment for product
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/AddCommentForProduct'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/AddCommentForProduct'
 *          responses :
 *              201 :
 *                  description : created
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : "#/definitions/Comment"
 */


/**
 * @swagger
 *  /admin/comment/list :
 *      get :
 *          tags : [Comment]
 *          summary : get all comments
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : "#/definitions/Comment"
 */
/**
 * @swagger
 *  /admin/comment/show/{id} :
 *      patch :
 *          tags : [Comment]
 *          summary : show comment
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
 *                              $ref : "#/definitions/DeleteAndUpdate"
 */
/**
 * @swagger
 *  /admin/comment/answer/{id} :
 *      patch :
 *          tags : [Comment]
 *          summary : show comment
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateComment'
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : "#/definitions/DeleteAndUpdate"
 */
/**
 * @swagger
 *  /admin/comment/remove/{id} :
 *      delete :
 *          tags : [Comment]
 *          summary : remove comment with id
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
 *                              $ref : "#/definitions/DeleteAndUpdate"
 */
