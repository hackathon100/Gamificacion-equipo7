    //Array para visualizar en la tabla
    const [tasks, setTasks] = useState([])
    //Variables del formulario
    const [currentId, setCurrentId] = useState(null)
    //Modo crear=true, modo editar=false
    const [mode, setMode] = useState(true)
    const [formu, setFormu] = useState({
        user: "",
        content: ""
    })

    const getTask = async () => {
        db.collection('tareas').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            setTasks(docs)
        })
    }
    //Función para crear tarea
    const postTask = async (e) => {
        e.preventDefault();
        await db.collection('tareas').doc().set(formu)
        resetForm()
    }
    //Función para actualizar tareas
    const putTask = async (e) => {
        e.preventDefault()
        await db.collection('tareas').doc('currentId').update(formu);
        resetForm();
    }
    //Función para eliminar tareas
    const deleteTask = async (id) => {
        await db.collection('tareas').doc(id).delete()
    }

    //Función para asignar los valores por defecto a su respectiva variable
    const setForm = (user, content, id) => {
        setFormu({
            user: user,
            content: content
        })
        setCurrentId(id)
        setMode(false)
    }
    //Función para limpiar el formulario
    const resetForm = () => {
        setFormu({
            user: "",
            content: ""
        })
        setCurrentId(null)
        setMode(true)
    }

    useEffect(() => {
        getTask()
    }, [])