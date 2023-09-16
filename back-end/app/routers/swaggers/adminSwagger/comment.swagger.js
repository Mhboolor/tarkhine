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
 *                      description : name of product
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
