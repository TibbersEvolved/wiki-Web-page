package TowerDefenseWiki.backend.Repository;

import TowerDefenseWiki.backend.Models.Perk;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PerkRepository {

    List<Perk> perks = new ArrayList<>();

    private List<Perk> getFillerContent() {
        List<Perk> output = new ArrayList<>();
        output.add(new Perk("Emerald Gem",
                "gemEmerald.png",
                "Increases attack speed by 30%",
                "Rare"
                ));
        output.add(new Perk("Azure Gem",
                "gemAzure.png",
                "Increases range by 20, but lowers attack speed by 10%",
                "Rare"
        ));
        output.add(new Perk("Pyro Gem",
                "gemPyro.png",
                "+100% damage for first 10 seconds of a round",
                "Rare"
        ));
        output.add(new Perk("Asmethyst",
                "gemPurple.png",
                "Increases attack speed by 70%",
                "Epic"
        ));
        output.add(new Perk("Jade Gem",
                "gemJade.png",
                "Increases the towers range by 10",
                "Common"
        ));
        return output;
    }

    public PerkRepository() {
        perks.addAll(getFillerContent());
    }

    public List<Perk> getGems() {
        return perks;
    }
}
