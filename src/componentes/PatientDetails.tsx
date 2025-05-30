import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from '../store/store'


type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const deletePatient = usePatientStore(state => state.deletePatient)

    const getPatientById = usePatientStore(state => state.getPatientById)



    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

            <PatientDetailItem label="ID" data={patient.id} />

            <PatientDetailItem label="Nombre" data={patient.name} />

            <PatientDetailItem label="Propietario" data={patient.caretaker} />

            <PatientDetailItem label="Email" data={patient.email} />

            <PatientDetailItem label="Sintomas" data={patient.symptoms} />

            <PatientDetailItem label="Fecha" data={patient.date.toString()} />

            <div className="flex flex-col gap-3 lg:flex-row justify-around mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                > Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg"
                    onClick={() => deletePatient(patient.id)}
                > Eliminar
                </button>
            </div>

        </div>
    )
}
