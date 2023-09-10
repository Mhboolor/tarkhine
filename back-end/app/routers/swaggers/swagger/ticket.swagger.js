/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateTicket :
 *              type : object
 *              required :
 *                  -   departmentID
 *                  -   departmentSubID
 *                  -   title
 *                  -   priority
 *                  -   body
 *              properties :
 *                  departmentID :
 *                      type : string
 *                      description : department id for create ticket
 *                  departmentSubID :
 *                      type : string
 *                      description : department sub id for create ticket
 *                  product :
 *                      type : string
 *                      description : product id for create ticket
 *                  course :
 *                      type : string
 *                      description : course id for create ticket
 *                  title :
 *                      type : string
 *                      description : title for create ticket
 *                  body :
 *                      type : string
 *                      description : body for create ticket
 *                  priority :
 *                      type : number
 *                      description : priority for create ticket
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          SetAnswer :
 *              type : object
 *              required :
 *                  -   ticketID
 *                  -   body
 *              properties :
 *                  ticketID :
 *                      type : string
 *                      description : ticket id for set answer of ticket
 *                  body :
 *                      type : string
 *                      description : body for set answer of ticket
 */

/**
 * @swagger
 *  /ticket/add :
 *      post :
 *          tags : [Ticket]
 *          summary : create ticket
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateTicket'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateTicket'
 *          responses :
 *              201 :
 *                  description : create - ticket created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateTicket'
 */
/**
 * @swagger
 *  /ticket/set-answer :
 *      post :
 *          tags : [Ticket]
 *          summary : set answer for ticket
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/SetAnswer'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/SetAnswer'
 *          responses :
 *              201 :
 *                  description : create - set answer ticket
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/SetAnswer'
 */

/**
 * @swagger
 *  /ticket/get-answer/{id} :
 *      get :
 *          tags : [Ticket]
 *          summary : get answer of ticket
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
 *                              $ref : '#/definitions/GetAnswer'
 */
/**
 * @swagger
 *  /ticket/list :
 *      get :
 *          tags : [Ticket]
 *          summary : get list of tickets
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/TicketList'
 */

/**
 * @swagger
 *  /ticket/list-of-user :
 *      get :
 *          tags : [Ticket]
 *          summary : get list of tickets for user
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/TicketList'
 */
