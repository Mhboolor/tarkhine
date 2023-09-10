/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateDepartment :
 *              type : object
 *              required :
 *                  -   title
 *              properties :
 *                  title :
 *                      type : string
 *                      description : title for department
 */

/**
 * @swagger
 *  /admin/department/add :
 *      post :
 *          tags : [Department]
 *          summary : create department
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartment'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartment'
 *          responses :
 *              201 :
 *                  description : create - department created
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/Department'
 */

/**
 * @swagger
 *  /admin/department/list :
 *      get :
 *          tags : [Department]
 *          summary : get list of departments
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DepartmentList'
 */

/**
 * @swagger
 *  /admin/department/update/{field} :
 *      patch :
 *          tags : [Department]
 *          summary : create department
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : string
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartment'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartment'
 *          responses :
 *              201 :
 *                  description : success - department updated
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/department/remove/{field} :
 *      delete :
 *          tags : [Department]
 *          summary : remove department with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : string
 *          responses :
 *              200 :
 *                  description : success - department removed
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
