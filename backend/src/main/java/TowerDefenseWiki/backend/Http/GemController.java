package TowerDefenseWiki.backend.Http;

import TowerDefenseWiki.backend.DTO.GemDto;
import TowerDefenseWiki.backend.Services.PerkService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class PerkController {

    private PerkService service;

    public PerkController(PerkService service) {
        this.service = service;
    }


    @GetMapping("/api/perks")
    public List<GemDto> getAllGems() {
        return service.getAllGems();
    }



}
