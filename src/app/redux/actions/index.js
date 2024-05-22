import getCategories from "./Categorias/getCategories";
import getPosteos from "./Posts/getPosteos";
/* import getAmigos from "./Amigos/getAmigos"; */
import filterCategories from "./Filters/filterCategories";
import filterMarcas from "./Filters/filterMarcas";
import resetFilters from "./Filters/resetFilters";
import getMarcas from "./Marcas/getMarcas";
import isLoading from "./Loading/loading";
import getById from "./Posts/getById";
import postCategories from "./Categorias/postCategories";
import postPosts from "./Posts/postPosteos";
import deleteCategories from "./Categorias/deleteCategories";
import deletePosteos from "./Posts/deletePosteos";

export { getCategories, getPosteos/* , getAmigos */, getById, postCategories, postPosts, deleteCategories, deletePosteos, filterCategories, getMarcas, filterMarcas, isLoading, resetFilters }