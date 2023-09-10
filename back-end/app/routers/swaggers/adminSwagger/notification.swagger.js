/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateNotification :
 *              type : object
 *              required :
 *                  -   adminID
 *                  -   msg
 *              properties :
 *                  adminID :
 *                      type : string
 *                      description : code for create off
 *                  msg :
 *                      type : string
 *                      description : msg for create notification
 *
 */

/**
 * @swagger
 *  /admin/notification/add : 
 *      post : 
 *          tags : [Notification(AdminPanel)]
 *          summary : create notification for admin
 *          requestBody : 
 *              required : true
 *              content : 
 *                  application/x-www-form-urlencoded : 
 *                      schema : 
 *                          $ref : "#/components/schemas/CreateNotification"
 *                  application/json : 
 *                      schema : 
 *                          $ref : "#/components/schemas/CreateNotification"
 *          responses : 
 *              201 : 
 *                  description : create - notification created
 */
/**
 * @swagger
 *  /admin/notification/see/{id} : 
 *      patch : 
 *          tags : [Notification(AdminPanel)]
 *          summary : see notification
 *          parameters : 
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses : 
 *              200 : 
 *                  description : success - see notification
 */
/**
 * @swagger
 *  /admin/notification/all-notifications : 
 *      get : 
 *          tags : [Notification(AdminPanel)]
 *          summary : get all notification for admin
 *          responses : 
 *              200 : 
 *                  description : success - see notification
 */