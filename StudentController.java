// src/main/java/com/example/demo/controller/StudentController.java

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @PostMapping
    public ResponseEntity<?> registerStudent(@RequestBody Student student) {
        // Perform backend validation and database operations here
        // Generate an admission number and store data in MongoDB (not implemented here)
        return ResponseEntity.ok("Student registered successfully");
    }
}
