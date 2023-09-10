
/**
 * @swagger
 *  components :
 *      schemas :
 *          ChangeRole :
 *              type : object
 *              properties :
 *                  id :
 *                      type : string
 *                      description : the id of user
 *                  role :
 *                      type : string
 *                      description : the role of user
 */

/**
 * @swagger
 *  /admin/user/update-role :
 *      patch :
 *          tags : [User]
 *          summary : change role of user
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/ChangeRole'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/ChangeRole'
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/user/list :
 *      get :
 *          tags : [User]
 *          summary : get all users
 *          parameters :
 *              -   in : query
 *                  name : search
 *                  type : string
 *                  description: search in user first_name, last_name, username, mobile, email
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/AllUsers'
 */

/**
 * @swagger
 *  /admin/user/ban/{id} :
 *      post :
 *          tags : [User]
 *          summary : ban user
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
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
