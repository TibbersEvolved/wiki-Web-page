package Services;

import DTO.PerkDto;
import Models.Perk;
import Repository.PerkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerkService {

    private PerkRepository repo;

    public PerkService(PerkRepository repo) {
        this.repo = repo;
    }

    public List<PerkDto> getAllPerks() {
        List<Perk> perks = repo.getPerks();
        List<PerkDto> output = perks.stream()
                .map(perk -> {
                    return new PerkDto(perk.getName(),perk.getDescription(),perk.getImageLink(), perk.getRarity());
                })
                .toList();
        return output;
    }
}
