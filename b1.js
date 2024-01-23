
let person = {
    name: 'Lan Anh',
    age: 19,
    address: 'Hà Đông',
};
console.log('Tên:', person.name);
console.log('Tuổi:', person.age);
console.log('Địa chỉ:', person.address);

person.dateOfBirth = '01-02-2005';

console.log('Tên:', person.name);
console.log('Ngày sinh:', person.dateOfBirth);
console.log('Địa chỉ:', person.address);

delete person.age;
console.log('Tên:', person.name);
console.log('Ngày sinh:', person.dateOfBirth);
console.log('Địa chỉ:', person.address);
