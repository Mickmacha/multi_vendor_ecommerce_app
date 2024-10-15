import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Category {
  _id: string;
  name: string;
}

interface Vendor {
  _id: string;
  name: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  vendor: string;
  imageUrl: string;
}

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  category: string;
  vendor: string;
  image?: File;
}

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
  initialData?: Partial<ProductFormData>;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: '',
    category: '',
    vendor: '',
    ...initialData,
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]); // This will hold your product list

  useEffect(() => {
    // Replace with your API calls
    setCategories([{ _id: '1', name: 'Electronics' }, { _id: '2', name: 'Books' }]);
    setVendors([{ _id: '1', name: 'Vendor A' }, { _id: '2', name: 'Vendor B' }]);
    // Fetch products (or set up product list here)
    setProducts([
      {
        _id: '1',
        name: 'Product 1',
        description: 'This is Product 1',
        price: '50',
        category: 'Electronics',
        vendor: 'Vendor A',
        imageUrl: 'https://via.placeholder.com/50',
      },
      {
        _id: '2',
        name: 'Product 2',
        description: 'This is Product 2',
        price: '100',
        category: 'Books',
        vendor: 'Vendor B',
        imageUrl: 'https://via.placeholder.com/50',
      },
    ]);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prevData => ({
        ...prevData,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col">
      {/* Breadcrumb Header */}
      <div className="header bg-white h-16 px-10 py-8 border-b-2 border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-green-700 tracking-wider font-thin text-md"><a href="#">Home</a></span>
          <span>/</span>
          <span className="tracking-wide text-md text-gray-700">
            <span className="text-base">Products</span>
          </span>
          <span>/</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="header my-3 h-12 px-10 flex items-center justify-between">
        <h1 className="font-medium text-black text-2xl">All Products</h1>
      </div>

      {/* Form and Table Layout */}
      <div className="flex flex-col mx-3 mt-6 lg:flex-row flex-grow">
        {/* Product Form */}
        <div className="w-full lg:w-1/3 m-1">
          <form className="w-full bg-white shadow-md p-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="product_name">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  required
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                />
              </div>

              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Product Price"
                  required
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                />
              </div>

              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                <textarea
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Product Description"
                  required
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                />
              </div>

              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="vendor">Vendor</label>
                <select
                  name="vendor"
                  value={formData.vendor}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                >
                  <option value="">Select a vendor</option>
                  {vendors.map(vendor => (
                    <option key={vendor._id} value={vendor._id}>
                      {vendor.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="image">Product Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                />
              </div>

              {imagePreview && (
                <div className="w-full px-3 mb-6">
                  <img src={imagePreview} alt="Product Preview" className="h-24 w-24 object-cover rounded-lg"/>
                </div>
              )}

              <div className="w-full px-3 mb-6">
                <button
                  type="submit"
                  className="appearance-none block w-full bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Product List Table */}
      <div className="overflow-x-auto rounded-lg p-3">
        <h2 className="text-black font-semibold uppercase"> Product List</h2>
        <table className="table-auto w-full">
          <thead className="text-sm font-semibold uppercase text-gray-800 bg-gray-50 mx-auto">
            <tr>
              <th></th>
              <th>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5 mx-auto">
                  <path d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5 1.597 1.363L13 13l4 6H7l2-3z"/>
                </svg>
              </th>
              <th className="p-8">
                <div className="font-semibold">Name</div>
              </th>
              <th className="p-8">
                <div className="font-semibold">Price</div>
              </th>
              <th className="p-10">
                <div className="font-semibold text-left">Category</div>
              </th>
              <th className="p-12">
                <div className="font-semibold text-center">Actions</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="border-t">
                <td>{index + 1}</td>
                <td>
                  <img src={product.imageUrl} className="h-8 w-8 mx-auto" alt={product.name}/>
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td className="p-2">
                  <div className="flex justify-center">
                    <a href="#" className="rounded-md hover:bg-green-100 text-green-600 p-2 flex justify-between items-center">
                      <FaEdit className="w-4 h-4 mr-1"/> Edit
                    </a>
                    <button className="rounded-md hover:bg-red-100 text-red-600 p-2 flex justify-between items-center">
                      <FaTrash className="w-4 h-4 mr-1"/> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>
    </div>
  );
};

export default ProductForm;
