package TowerDefenseWiki.backend.Http;

import TowerDefenseWiki.backend.DTO.PerkDto;
import TowerDefenseWiki.backend.Services.PerkService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class PerkController {

    private PerkService service;

    public PerkController(PerkService service) {
        System.out.println("Controller started");
        this.service = service;
    }

    @GetMapping("/api/perks")
    public List<PerkDto> getAllPerks() {
        System.out.println("Ran get all perks");
        return service.getAllPerks();
    }

    @GetMapping("/api")
    public String accessApi() {
        return "Hey";
    }

}
