package TowerDefenseWiki.backend.Repository;

import TowerDefenseWiki.backend.Models.Gem;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GemRepository extends ListCrudRepository<Gem, Long> {


}
