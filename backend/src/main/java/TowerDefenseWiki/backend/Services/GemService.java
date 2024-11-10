package TowerDefenseWiki.backend.Services;

import TowerDefenseWiki.backend.DTO.AddGemDto;
import TowerDefenseWiki.backend.DTO.GemDto;
import TowerDefenseWiki.backend.Models.Gem;
import TowerDefenseWiki.backend.Repository.GemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GemService {

    private GemRepository repo;


    public GemService(GemRepository repo) {
        this.repo = repo;
    }

    public List<Gem> getAllGems() {
        return repo.findAll();
    }

    public void deleteGem(Long id) {
        Optional<Gem> gem = repo.findById(id);
        if(gem.isPresent()) {
            repo.delete(gem.get());
        }
    }

    public void addGem(AddGemDto dto) {
        Gem gem = new Gem(dto.name(), dto.imageLink(), dto.description(), dto.rarity());
        repo.save(gem);
    }
}
