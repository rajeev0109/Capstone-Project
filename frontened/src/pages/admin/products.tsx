import { ReactElement, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Column } from 'react-table';
import AdminSidebar from '../../components/admin/AdminSidebar';
import TableHOC from '../../components/admin/TableHOC';

interface DataType {
  photo: ReactElement;
  name: string;
  author: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: 'Photo',
    accessor: 'photo',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Author',
    accessor: 'author',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Stock',
    accessor: 'stock',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const img = 'https://m.media-amazon.com/images/I/41ZHywPHUaL.AC_SX250.jpg';

const img2 = 'https://m.media-amazon.com/images/I/51dvGAGQ-mL.AC_SX250.jpg';

const arr: Array<DataType> = [
  {
    photo: <img src={img} alt="Books" />,
    name: 'Twisted Love By Ana Huang',
    author: 'Ana Huang',
    price: 391,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Books" />,
    name: 'प्रोफेसर की डायरी',
    author: 'Ana Huang',
    price: 187,
    stock: 10,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
];

const Products = () => {
  const [rows, setRows] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    'dashboard-product-box',
    'Products',
    rows.length > 6
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
