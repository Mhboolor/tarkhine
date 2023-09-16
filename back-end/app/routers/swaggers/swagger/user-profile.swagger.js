/**
 * @swagger
 *  components :
 *      schemas :
 *          UpdateProfile :
 *              type : object
 *              properties :
 *                  first_name :
 *                      type : string
 *                      description : first name of user
 *                  last_name :
 *                      type : string
 *                      description : last name of user
 *                  username :
 *                      type : string
 *                      description : username of user
 *                  email :
 *                      type : string
 *                      description : email of user
 *                  birthday :
 *                      type : string
 *                      description : birthday of user
 */

/**
 * @swagger
 *  /profile/bookmark-product : 
 *      get : 
 *          tags : [UserProfile]
 *          summary : get bookmark product of user
 *          responses : 
 *              200 : 
 *                  description : success
 *                  content : 
 *                      application/json :
 *                              schema :
 *                                  $ref : '#/definitions/GetBookmarkedProduct'
 */

/**
 * @swagger
 *  /profile/basket : 
 *      get : 
 *          tags : [UserProfile]
 *          summary : get basket of user
 *          responses : 
 *              200 : 
 *                  description : success
 *                  content : 
 *                      application/json :
 *                              schema :
 *                                  $ref : '#/definitions/Basket'
 */


/**
 * @swagger
 *  /profile/update-profile :
 *      patch :
 *          tags : [UserProfile]
 *          summary : update profile user
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateProfile'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateProfile'
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */