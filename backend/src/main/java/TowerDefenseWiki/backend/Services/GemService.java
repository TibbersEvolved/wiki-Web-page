package TowerDefenseWiki.backend.Services;

import TowerDefenseWiki.backend.DTO.GemDto;
import TowerDefenseWiki.backend.Models.Gem;
import TowerDefenseWiki.backend.Repository.GemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GemService {

    private GemRepository repo;


    public GemService(GemRepository repo) {
        this.repo = repo;
    }

    public List<Gem> getAllGems() {
        return repo.findAll();
    }

    public void addGem(GemDto dto) {
        Gem gem = new Gem(dto.name(), dto.imageLink(), dto.description(), dto.rarity());
        repo.save(gem);
    }
}
