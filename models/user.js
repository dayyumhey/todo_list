module.exports = (sequelize,DataTypes) =>{

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
    tableName:'users'
  // Other model options go here
});


}

