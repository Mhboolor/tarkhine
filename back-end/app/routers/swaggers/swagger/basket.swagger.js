/**
 * @swagger
 *  /basket/add-product/{productID} :
 *      patch :
 *          tags : [Basket]
 *          summary : add product in basket
 *          parameters :
 *              -   in : path
 *                  name : productID
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
/**
 * @swagger
 *  /basket/remove-product/{productID} :
 *      patch :
 *          tags : [Basket]
 *          summary : remove product from basket
 *          parameters :
 *              -   in : path
 *                  name : productID
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
/**
 * @swagger
 *  /basket/remove-all-product :
 *      patch :
 *          tags : [Basket]
 *          summary : remove all products from basket
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
 *  /basket/add-course/{courseID} :
 *      patch :
 *          tags : [Basket]
 *          summary : add course in basket
 *          parameters :
 *              -   in : path
 *                  name : courseID
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
/**
 * @swagger
 *  /basket/remove-course/{courseID} :
 *      patch :
 *          tags : [Basket]
 *          summary : remove course from basket
 *          parameters :
 *              -   in : path
 *                  name : courseID
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
