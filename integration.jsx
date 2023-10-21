const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/api/students').then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Class</th>
          <th>Division</th>
          <th>Gender</th>
          <th>Admission Number</th>
        </tr>
      </thead>
      <tbody>
        {students.sort((a, b) => a.name.localeCompare(b.name)).map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
