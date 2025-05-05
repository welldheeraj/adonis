

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome');

Route.get('users', async (req, res) => {
    //const users = await User.all();
    //res.json('hhh');
    return "jjj fgfgfgf";
});
Route.any('users1', async (req, res) => {
    return "jjj";
});