import React, { useState } from 'react';
import { Box, Button, Input, Select, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

function MyStore() {
  const [products, setProducts] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [filterPriceRange, setFilterPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleAddProduct = () => {
    const newProduct = { id: Date.now(), title, category, price, image };
    setProducts([...products, newProduct]);
    resetForm();
  };

  const handleEditProduct = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setTitle(product.title);
    setCategory(product.category);
    setPrice(product.price);
    setImage(product.image);
  };

  const handleUpdateProduct = () => {
    const updatedProduct = { ...currentProduct, title, category, price, image };
    const updatedProducts = products.map(product =>
      product.id === currentProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    resetForm();
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const resetForm = () => {
    setTitle('');
    setCategory('');
    setPrice('');
    setImage(null);
    setIsEditing(false);
    setCurrentProduct(null);
  };

  return (
    <Box padding={5}>
      <Stack spacing={3}>
        <Box>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              isEditing ? handleUpdateProduct() : handleAddProduct();
            }}
          >
            <Stack spacing={3}>
              <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <Input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
              <Input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
              <Input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
              <Button type="submit">{isEditing ? 'Update' : 'Add'} Product</Button>
              {isEditing && <Button onClick={resetForm}>Cancel</Button>}
            </Stack>
          </form>
        </Box>
        <Box>
          <Select placeholder="Filter by type" onChange={(e) => setFilterType(e.target.value)}>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </Select>
          <Input placeholder="Min Price" type="number" onChange={(e) => setFilterPriceRange([e.target.value, filterPriceRange[1]])} />
          <Input placeholder="Max Price" type="number" onChange={(e) => setFilterPriceRange([filterPriceRange[0], e.target.value])} />
        </Box>
        <Box>
          <Select placeholder="Sort by" onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </Box>
        <Box>
          <Table>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Image</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map(product => (
                <Tr key={product.id}>
                  <Td>{product.title}</Td>
                  <Td>{product.category}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.image && <img src={product.image} alt="Product" style={{ maxWidth: '100px' }} />}</Td>
                  <Td>
                    <Button onClick={() => handleEditProduct(product)}>Edit</Button>
                    <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </Box>
  );
}

export default MyStore;
