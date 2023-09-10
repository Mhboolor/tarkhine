/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateMenu :
 *              type : object
 *              required :
 *                  -   title
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of menu
 *          UpdateMenu :
 *              type : object
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of menu
 */

/**
 * @swagger
 *  /menu/add :
 *      post :
 *          tags : [Menu]
 *          summary : create menu
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateMenu'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateMenu'
 *          responses :
 *              201 :
 *                  description : create - menu created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateMenu'
 */
/**
 * @swagger
 *  /menu/add-submenu/{titleName} :
 *      patch :
 *          tags : [Menu]
 *          summary : create submenu
 *          parameters :
 *              -   in : path
 *                  name : titleName
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateMenu'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateMenu'
 *          responses :
 *              201 :
 *                  description : create - submenu created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateSubmenu'
 */

/**
 * @swagger
 *  /menu/list :
 *      get :
 *          tags : [Menu]
 *          summary : get all menus
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateSubmenu'
 */

/**
 * @swagger
 *  /menu/update/{field} :
 *      patch :
 *          tags : [Menu]
 *          summary : update menu with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateMenu'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateMenu'
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
 *  /menu/remove/{field} :
 *      delete :
 *          tags : [Menu]
 *          summary : remove menu with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
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
