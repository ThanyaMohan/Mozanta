public class Student {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private String name;
  private Date dob;
  private String clazz;
  private String division;
  private String gender;
  private String admissionNumber;

  public Student() {
  }

  public Student(String name, Date dob, String clazz, String division, String gender) {
    this.name = name;
    this.dob = dob;
    this.clazz = clazz;
