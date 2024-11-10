package TowerDefenseWiki.backend.Http;

import TowerDefenseWiki.backend.DTO.AddGemDto;
import TowerDefenseWiki.backend.DTO.GemDto;
import TowerDefenseWiki.backend.DTO.IdDto;
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


    @GetMapping("/api/gems")
    public List<GemDto> getAllGems() {
        return convertGemsToDto(service.getAllGems());
    }

    @DeleteMapping("/api/gems/admin")
    public ResponseEntity deleteGem(@RequestBody IdDto input) {
        service.deleteGem(input.id());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/api/gems/admin")
    public ResponseEntity addGem(@RequestBody AddGemDto dto) {
        service.addGem(dto);
        return ResponseEntity.ok().build();
    }


    private List<GemDto> convertGemsToDto(List<Gem> gems) {
        return gems.stream()
                .map(gem -> {
                    return new GemDto(gem.getName(),gem.getDescription(),gem.getImageLink(), gem.getRarity(), gem.getId());
                })
                .toList();
    }


}
