/**
 * @swagger
 *  components:
 *      schemas:
 *          Types:
 *              type: string
 *              enum:
 *                  -   free
 *                  -   cash
 *                  -   special
 */

/**
 * @swagger
 *  definitions:
 *      ListOfCourses:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: integer
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      courses:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                  title:
 *                                      type: string
 *                                  short_text:
 *                                      type: string
 *                                  text:
 *                                      type: string
 *                                  status:
 *                                      type: string
 *                                  time:
 *                                      type: string
 *                                  price:
 *                                      type: integer
 *                                  discount:
 *                                      type: integer
 *                                  studentCount:
 *                                      type: integer
 *                                  teacher:
 *                                      type: string
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Insert-Course:
 *              type: object
 *              required:
 *                  -   title
 *                  -   short_text
 *                  -   text
 *                  -   tags
 *                  -   category
 *                  -   price
 *                  -   images
 *                  -   type
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the title of course
 *                  short_text:
 *                      type: string
 *                      description: the title of course
 *                  text:
 *                      type: string
 *                      description: the title of course
 *                  tags:
 *                      type: array
 *                      description: the tags of course
 *                  category:
 *                      type: string
 *                      description: the category of course
 *                  price:
 *                      type: string
 *                      description: the title of course
 *                  discount:
 *                      type: string
 *                      description: the title of course
 *                  images :
 *                      type : array
 *                      items :
 *                          type : string
 *                          format : binary
 *                  type:
 *                      $ref: '#/components/schemas/Types'
 *          Edit-Course:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the title of course
 *                  short_text:
 *                      type: string
 *                      description: the title of course
 *                  text:
 *                      type: string
 *                      description: the title of course
 *                  tags:
 *                      type: array
 *                      description: the tags of course
 *                  category:
 *                      type: string
 *                      description: the category of course
 *                  price:
 *                      type: string
 *                      description: the title of course
 *                  discount:
 *                      type: string
 *                      description: the title of course
 *                  images :
 *                      type : array
 *                      items :
 *                          type : string
 *                          format : binary
 *                  type:
 *                      $ref: '#/components/schemas/Types'
 */
/**
 * @swagger
 *  /admin/courses/add:
 *      post:
 *          tags: [Course(AdminPanel)]
 *          summary: create and save course
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/Insert-Course'
 *
 *          responses:
 *              201:
 *                  description: created new course
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/publicDefinition'
 *
 */

/**
 * @swagger
 *  /admin/courses/update/{id}:
 *      patch:
 *          tags: [Course(AdminPanel)]
 *          summary: edit and save course
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/Edit-Course'
 *          responses:
 *              201:
 *                  description: created new course
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/publicDefinition'
 *
 */

/**
 * @swagger
 *  /admin/courses/list:
 *      get:
 *          tags: [Course(AdminPanel)]
 *          summary: get all of courses
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: search in course text, title, short_text
 *          responses :
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/ListOfCourses'
 */

/**
 * @swagger
 *  /admin/courses/{title}:
 *      get:
 *          tags: [Course(AdminPanel)]
 *          summary: get one of courses by ObjectId
 *          parameters:
 *              -   in: path
 *                  name: title
 *                  type: string
 *                  description: find course by title
 *          responses :
 *              200:
 *                  description: success
 */
/**
 * @swagger
 *  /admin/courses/remove/{id}:
 *      delete:
 *          tags: [Course(AdminPanel)]
 *          summary: remove course by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  description: remove course by id
 *          responses :
 *              200:
 *                  description: success
 */
/**
 * @swagger
 *  /admin/courses/user-register-course/{courseID}:
 *      post:
 *          tags: [Course(AdminPanel)]
 *          summary: user register course
 *          parameters:
 *              -   in: path
 *                  name: courseID
 *                  type: string
 *                  description: find course by id and register course for user
 *          responses :
 *              201:
 *                  description: success
 */

/**
 * @swagger
 *  /admin/courses/bookmark/{courseID} :
 *      get :
 *          tags : [Course(AdminPanel)]
 *          summary : update bookmark course with id
 *          parameters :
 *              -   in : path
 *                  name : courseID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - course updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/courses/like/{courseID} :
 *      get :
 *          tags : [Course(AdminPanel)]
 *          summary : update like course with id
 *          parameters :
 *              -   in : path
 *                  name : courseID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - course updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/courses/dislike/{courseID} :
 *      get :
 *          tags : [Course(AdminPanel)]
 *          summary : update dislike course with id
 *          parameters :
 *              -   in : path
 *                  name : courseID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - course updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
