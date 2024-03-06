module.exports = (sequelize,DataTypes) =>{

const Contact = sequelize.define('Contacts', {
  // Model attributes are defined here
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Other_address: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
}
