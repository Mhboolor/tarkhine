/**
 * @swagger
 *  components :
 *      schemas :
 *          GetOtp :
 *              type : object
 *              required :
 *                  -   mobile
 *              properties :
 *                  mobile :
 *                      type : string
 *                      description : the user mobile for sign up or sign in
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          CheckOtp :
 *              type : object
 *              required :
 *                  -   mobile
 *                  -   code
 *              properties :
 *                  mobile :
 *                      type : string
 *                      description : the user mobile for sign up or sign in
 *                  code :
 *                      type : integer
 *                      description : receive code from get otp
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          Register :
 *              type : object
 *              required :
 *                  -   first_name
 *                  -   last_name
 *                  -   username
 *                  -   mobile
 *                  -   email
 *                  -   password
 *              properties :
 *                  first_name :
 *                      type : string
 *                      description : the user first_name for register
 *                  last_name :
 *                      type : string
 *                      description : the user last_name for register
 *                  username :
 *                      type : string
 *                      description : the user username for register
 *                  mobile :
 *                      type : string
 *                      description : the user mobile for register
 *                  email :
 *                      type : string
 *                      description : the user email for register
 *                  password :
 *                      type : string
 *                      description : the user password for register
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          Login :
 *              type : object
 *              required :
 *                  -   identifier
 *                  -   password
 *              properties :
 *                  identifier :
 *                      type : string
 *                      description : the user identifier for login(email/username)
 *                  password :
 *                      type : string
 *                      description : the user password for login
 */

/**
 * @swagger
 *  /auth/get-otp :
 *      post :
 *          tags : [User Authentication]
 *          summary : get otp code with mobile
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOtp'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOtp'
 *          responses :
 *              201 :
 *                  description : Success - Created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/GetOtpAuth'
 */

/**
 * @swagger
 *  /auth/check-otp :
 *      post :
 *          tags : [User Authentication]
 *          summary : check otp value in user controller
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CheckOtp'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CheckOtp'
 *          responses :
 *              201 :
 *                  description : Success - Created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/OTP'
 */

/**
 * @swagger
 *  /auth/register :
 *      post :
 *          tags : [User Authentication]
 *          summary : register user
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Register'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/Register'
 *          responses :
 *              201 :
 *                  description : Success - Created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/Register'
 */
/**
 * @swagger
 *  /auth/login :
 *      post :
 *          tags : [User Authentication]
 *          summary : login user
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Login'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/Login'
 *          responses :
 *              200 :
 *                  description : Success 
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/Login'
 */

/**
 * @swagger
 *  /auth/me :
 *      get :
 *          tags : [User Authentication]
 *          summary : get me
 *          responses :
 *              200 :
 *                  description : Success 
 */
