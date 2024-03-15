import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.DB_URI);
};

const connection = mongoose.connection;

//callback -- funcion que se ejecutara despues
connection.once('open', () => {
    console.log('Se connecto a la base de datos exitosa')
});

connection.once('error', () => {
    console.error('No se pudo conectar a la base de datos');
})

export { connect };