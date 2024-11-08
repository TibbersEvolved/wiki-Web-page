package TowerDefenseWiki.backend.Services;

import TowerDefenseWiki.backend.DTO.GemDto;
import TowerDefenseWiki.backend.Models.Perk;
import TowerDefenseWiki.backend.Repository.PerkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerkService {

    private PerkRepository repo;


    public PerkService(PerkRepository repo) {
        this.repo = repo;
    }

    public List<GemDto> getAllGems() {
        List<Perk> perks = repo.getGems();
        List<GemDto> output = perks.stream()
                .map(perk -> {
                    return new GemDto(perk.getName(),perk.getDescription(),perk.getImageLink(), perk.getRarity());
                })
                .toList();
        return output;
    }
}
