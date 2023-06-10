export default function handler(req, res) {
  res.status(200).json([
    { fooditem: 'Colacasia', id: '1', category: 'Vegetables', wastage: 100},
    { fooditem: 'Soy Milk', id: '2', category: 'Dairy' , wastage: 150},
    { fooditem: 'Banana Peels', id: '3', category: 'Fruits', wastage: 500 },
    { fooditem: 'Sour Curd', id: '4', category: 'Dairy', wastage: 370 },
  ])
}