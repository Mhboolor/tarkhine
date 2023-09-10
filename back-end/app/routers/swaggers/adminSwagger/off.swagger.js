/**
 * @swagger
 *  components :
 *      schemas :
 *          Create :
 *              type : object
 *              required :
 *                  -   code
 *                  -   percent
 *                  -   max
 *                  -   product
 *              properties :
 *                  code :
 *                      type : string
 *                      description : code for create off
 *                  percent :
 *                      type : string
 *                      description : percent for create off
 *                  max :
 *                      type : number
 *                      description : max for create off
 *                  product :
 *                      type : string
 *                      description : product for create off
 *
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateOffForCourse :
 *              type : object
 *              required :
 *                  -   code
 *                  -   percent
 *                  -   max
 *                  -   course
 *              properties :
 *                  code :
 *                      type : string
 *                      description : code for create off
 *                  percent :
 *                      type : string
 *                      description : percent for create off
 *                  max :
 *                      type : number
 *                      description : max for create off
 *                  course :
 *                      type : string
 *                      description : course for create off
 *
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          GetOne :
 *              type : object
 *              required :
 *                  -   product
 *              properties :
 *                  product :
 *                      type : string
 *                      description : product for create off
 *
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          GetOneOfCourse :
 *              type : object
 *              required :
 *                  -   course
 *              properties :
 *                  course :
 *                      type : string
 *                      description : course for create off
 *
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          Discount :
 *              type : object
 *              required :
 *                  -   discount
 *              properties :
 *                  discount :
 *                      type : string
 *                      description : set discount for all products
 *
 */

/**
 * @swagger
 *  /admin/off/add-product :
 *      post :
 *          tags : [Off]
 *          summary : create Off for product
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Create'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/Create'
 *          responses :
 *              201 :
 *                  description : create - off created
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateOff'
 */
/**
 * @swagger
 *  /admin/off/add-course :
 *      post :
 *          tags : [Off]
 *          summary : create Off for course
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateOffForCourse'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateOffForCourse'
 *          responses :
 *              201 :
 *                  description : create - off created
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateOff'
 */
/**
 * @swagger
 *  /admin/off/set-all :
 *      post :
 *          tags : [Off]
 *          summary : set discount for all products
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Discount'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/Discount'
 *          responses :
 *              201 :
 *                  description : create - set discount
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/SetAll'
 */
/**
 * @swagger
 *  /admin/off/get-one-product/{code} :
 *      post :
 *          tags : [Off]
 *          summary : get one of product
 *          parameters :
 *              -   in : path
 *                  name : code
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOne'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOne'
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/getOff'
 */
/**
 * @swagger
 *  /admin/off/get-one-course/{code} :
 *      post :
 *          tags : [Off]
 *          summary : get one of course
 *          parameters :
 *              -   in : path
 *                  name : code
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOneOfCourse'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOneOfCourse'
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/getOff'
 */

/**
 * @swagger
 *  /admin/off/list :
 *      get :
 *          tags : [Off]
 *          summary : list Off product and course
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/ListOff'
 */

/**
 * @swagger
 *  /admin/off/remove/{id} :
 *      delete :
 *          tags : [Off]
 *          summary : remove Off form product or course
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - code removed
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
