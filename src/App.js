import React, { useEffect, lazy, Suspense } from "react";
import i18n from "./i18n";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";
import { LoadingOutlined } from "@ant-design/icons";
import Uheader from "./components/upperheader/Uheader";
import Footer from "./components/footer/Footer";

//import Login from "./pages/auth/Login";
//import Register from "./pages/auth/Register";
//import Home from "./pages/Home";
//import Header from "./components/nav/Header";
//
//import RegisterComplete from "./pages/auth/RegisterComplete";
//import ForgotPassword from "./pages/auth/ForgotPassword";
//import History from "./pages/user/History";
//import UserRoute from "./components/routes/UserRoute";
//import AdminRoute from "./components/routes/AdminRoute";
//import Password from "./pages/user/Password";
//import Wishlist from "./pages/user/Wishlist";
//import AdminDashboard from "./pages/admin/AdminDashboard";
//import CategoryCreate from "./pages/admin/category/CategoryCreate";
//import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
//import SubCreate from "./pages/admin/sub/SubCreate";
//import SubUpdate from "./pages/admin/sub/SubUpdate";
//import ProductCreate from "./pages/admin/product/ProductCreate";
//import AllProducts from "./pages/admin/product/AllProducts";
//import ProductUpdate from "./pages/admin/product/ProductUpdate";
//import Product from "./pages/Product";
//import CategoryHome from "./pages/category/CategoryHome";
//import SubHome from "./pages/sub/SubHome";
//import Shop from "./pages/Shop";

//using lazy
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Header = lazy(() => import("./components/nav/Header"));
const RegisterComplete = lazy(() => import("./pages/auth/RegisterComplete"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const History = lazy(() => import("./pages/user/History"));
const UserRoute = lazy(() => import("./components/routes/UserRoute"));
const AdminRoute = lazy(() => import("./components/routes/AdminRoute"));
const Password = lazy(() => import("./pages/user/Password"));
const Wishlist = lazy(() => import("./pages/user/Wishlist"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const CategoryCreate = lazy(() =>
  import("./pages/admin/category/CategoryCreate")
);
const CategoryUpdate = lazy(() =>
  import("./pages/admin/category/CategoryUpdate")
);
const SubCreate = lazy(() => import("./pages/admin/sub/SubCreate"));
const SubUpdate = lazy(() => import("./pages/admin/sub/SubUpdate"));
const PostCategoryCreate = lazy(() =>
  import("./pages/admin/postcategory/PostCategoryCreate.js")
);
const PostCategoryUpdate = lazy(() =>
  import("./pages/admin/postcategory/PostCategoryUpdate")
);
const TagCreate = lazy(() => import("./pages/admin/posttag/TagCreate"));
const TagUpdate = lazy(() => import("./pages/admin/posttag/TagUpdate"));
const ProductCreate = lazy(() => import("./pages/admin/product/ProductCreate"));
const PostCreate = lazy(() => import("./pages/admin/post/PostCreate"));
const AllProducts = lazy(() => import("./pages/admin/product/AllProducts"));
const AllPosts = lazy(() => import("./pages/admin/post/AllPosts"));
const CategoryPost = lazy(() => import("./pages/post/categories/index.js"));
const SinglePost = lazy(() => import("./components/cards/SinglePost"));
const UpdatePost = lazy(() => import("./pages/admin/post/PostUpdate"));
const PostCategoryHome = lazy(() =>
  import("./pages/postcategory/PostCategoryHome.js")
);
const TagHome = lazy(() => import("./pages/posttag/TagHome"));
const ProductUpdate = lazy(() => import("./pages/admin/product/ProductUpdate"));
const Product = lazy(() => import("./pages/Product"));
const Customer = lazy(() =>
  import("./pages/admin/customers/CustomerCreate.js")
);
const Customers = lazy(() => import("./pages/admin/customers/AllCustomers.js"));
const CategoryHome = lazy(() => import("./pages/category/CategoryHome"));
const SubHome = lazy(() => import("./pages/sub/SubHome"));
const Shop = lazy(() => import("./pages/Shop"));
const Posts = lazy(() => import("./pages/post/main/index.js"));
const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    ReactGA.initialize("UA-149487956-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Suspense fallback={<div className="col text-center p-5">Loading ...</div>}>
      <Uheader />
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <UserRoute exact path="/user/history" component={History} />
        <UserRoute exact path="/user/password" component={Password} />
        <UserRoute exact path="/user/wishlist" component={Wishlist} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/category" component={CategoryCreate} />
        <AdminRoute
          exact
          path="/admin/category/:slug"
          component={CategoryUpdate}
        />
        <AdminRoute exact path="/admin/sub" component={SubCreate} />
        <AdminRoute exact path="/admin/sub/:slug" component={SubUpdate} />
        <AdminRoute exact path="/admin/product" component={ProductCreate} />
        <AdminRoute exact path="/admin/products" component={AllProducts} />
        <AdminRoute
          exact
          path="/admin/product/:slug"
          component={ProductUpdate}
        />
        <Route exact path="/category/:slug" component={CategoryHome} />
        <Route exact path="/sub/:slug" component={SubHome} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:slug" component={SinglePost} />
        <Route exact path="/posts/category/:slug" component={CategoryPost} />

        <Route exact path="/product/:slug" component={Product} />

        <AdminRoute
          exact
          path="/admin/postcategory"
          component={PostCategoryCreate}
        />
        <AdminRoute
          exact
          path="/admin/postcategory/:slug"
          component={PostCategoryUpdate}
        />
        <AdminRoute exact path="/admin/tag" component={TagCreate} />
        <AdminRoute exact path="/admin/tag/:slug" component={TagUpdate} />
        <AdminRoute exact path="/admin/post" component={PostCreate} />
        <AdminRoute exact path="/admin/posts" component={AllPosts} />
        <AdminRoute exact path="/post/:slug" component={SinglePost} />
        <AdminRoute exact path="/admin/post/:slug" component={UpdatePost} />
        <AdminRoute exact path="/admin/customer" component={Customer} />
        <AdminRoute exact path="/admin/customers" component={Customers} />
        <Route exact path="/postcategory/:slug" component={PostCategoryHome} />
        <Route exact path="/tag/:slug" component={TagHome} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default App;
