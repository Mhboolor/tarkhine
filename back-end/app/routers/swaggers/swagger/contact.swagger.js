/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateContact :
 *              type : object
 *              required :
 *                  -   name
 *                  -   email
 *                  -   phone
 *                  -   body
 *              properties :
 *                  name :
 *                      type : string
 *                      description : the name of registrar
 *                  email :
 *                      type : string
 *                      description : the email of registrar
 *                  phone :
 *                      type : string
 *                      description : the phone of registrar
 *                  body :
 *                      type : string
 *                      description : the body of registrar
 *          AnswerContact :
 *              type : object
 *              required :
 *                  -   email
 *                  -   answer
 *              properties :
 *                  email :
 *                      type : string
 *                      description : the email of registrar
 *                  answer :
 *                      type : string
 *                      description : the answer of email registrar
 */

/**
 * @swagger
 *  /contact/add :
 *      post :
 *          tags : [Contact]
 *          summary : create contact
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateContact'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateContact'
 *          responses :
 *              201 :
 *                  description : create - contact created
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/Contact'
 */
/**
 * @swagger
 *  /contact/answer :
 *      post :
 *          tags : [Contact]
 *          summary : answer contact with email
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/AnswerContact'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/AnswerContact'
 *          responses :
 *              200 :
 *                  description : create - email send
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/AnswerContact'
 */

/**
 * @swagger
 *  /contact/list :
 *      get :
 *          tags : [Contact]
 *          summary : get list of contacts
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/Contact'
 */
/**
 * @swagger
 *  /contact/remove/{id} :
 *      delete :
 *          tags : [Contact]
 *          summary : remove contact with id
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - contact removed
 *                  content : 
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
