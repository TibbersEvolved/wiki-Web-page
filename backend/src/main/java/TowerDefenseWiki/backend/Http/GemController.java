package TowerDefenseWiki.backend.Http;

import TowerDefenseWiki.backend.DTO.GemDto;
import TowerDefenseWiki.backend.Models.Gem;
import TowerDefenseWiki.backend.Services.GemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class GemController {

    private GemService service;

    public GemController(GemService service) {
        this.service = service;
    }


    @GetMapping("/api/perks")
    public List<GemDto> getAllGems() {
        return convertGemsToDto(service.getAllGems());
    }

    @PostMapping("/api/perks")
    public ResponseEntity addGem(@RequestBody GemDto dto) {
        service.addGem(dto);
        return ResponseEntity.ok().build();
    }


    private List<GemDto> convertGemsToDto(List<Gem> gems) {
        return gems.stream()
                .map(perk -> {
                    return new GemDto(perk.getName(),perk.getDescription(),perk.getImageLink(), perk.getRarity());
                })
                .toList();
    }


}
